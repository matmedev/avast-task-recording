class Interaction {
  constructor(record) {
    Object.assign(this, record);

    const {nodeName, url} = record.setup;

    const time = record.time;
    const type = record.event.type;
    const name = nodeName || url;

    const id = type + time + name;

    this._metadata = {
      time,
      type,
      name,
      id,
    };
  }

  get metadata() {
    return this._metadata;
  }
}

export default Interaction;
