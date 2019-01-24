const identity = val => val;

export function createAction(type, payloadCreator, metaCreator) {
  const finalPayloadCreator =
    typeof payloadCreator === 'function'
      ? payloadCreator
      : payloadCreator && payloadCreator.noPayload
      ? null
      : identity;

  const actionCreator = (...args) => {
    const hasError = args[0] instanceof Error;

    const action = {
      type
    };

    let payload = null;
    if (finalPayloadCreator !== null) {
      payload = hasError ? args[0] : finalPayloadCreator(...args);
    }
    if (!(payload === null || payload === undefined)) {
      action.payload = payload;
    }

    if (hasError || payload instanceof Error) {
      // Handle FSA errors where the payload is an Error object. Set error.
      action.error = true;
    }

    if (typeof metaCreator === 'function') {
      action.meta = metaCreator(...args);
    }

    return action;
  };

  actionCreator.toString = () => type.toString();
  actionCreator.type = type.toString();

  return actionCreator;
}

export function createServiceAction(type, event) {
  const actionType = `${type.toUpperCase()}_${event.toUpperCase()}`;
  const actionCreator = data => ({
    type: actionType,
    data
  });
  actionCreator.type = actionType;
  return actionCreator;
}

export function asyncAction(config) {
  const event = {
    name: config.baseName,
    start: `${config.baseName}_START`,
    success: `${config.baseName}_SUCCESS`,
    error: `${config.baseName}_ERROR`
  };

  const request = (type, isPending, error) => payload => ({
    type,
    payload,
    request: {
      id: config.baseName,
      isPending,
      error: error ? payload : null
    }
  });

  const dispatchers = {
    start: request(event.start, true),
    success: request(event.success, false),
    error: request(event.error, false, true)
  };

  const action = config.action(dispatchers);

  action.event = event;

  return action;
}
