// Format date to YYYY-MM-DD
exports.formatDate = (date) => {
  return new Date(date).toISOString().split('T')[0];
};