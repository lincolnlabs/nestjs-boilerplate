import { registerAs } from '@nestjs/config';

export default registerAs('graphql', () => ({
  sortSchema: true,
  playgroundEnabled: true,
  debug: true,
  introspection: true,
}));
