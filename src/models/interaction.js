class Interaction {
  constructor(time, type, name) {
    this.time = time;
    this.type = type;
    this.name = name;
  }

  static fromResponse(record) {
    const {nodeName, url} = record.setup;

    return new Interaction(record.time, record.event.type, nodeName || url);
  }
}

export default Interaction;
