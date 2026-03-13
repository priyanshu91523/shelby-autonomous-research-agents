function createReport(topic, summary, agent) {
  return {
    reportId: Date.now(),
    topic: topic,
    summary: summary,
    createdBy: agent,
    timestamp: Date.now()
  };
}

module.exports = { createReport };
