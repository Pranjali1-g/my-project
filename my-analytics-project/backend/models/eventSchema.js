module.exports = {
  type: "object",
  required: ["timestamp", "userId", "eventId", "route", "action"],
  properties: {
    timestamp: { type: "integer" },
    userId: { type: "string" },
    eventId: { type: "string" },
    sessionId: { type: "string" },
    route: { type: "string" },
    action: { type: "string" },
    metadata: { type: "object" }
  }
}
