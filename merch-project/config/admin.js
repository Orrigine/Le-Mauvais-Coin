module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0a99b6a62fab49d8846295119e256574'),
  },
});
