import { route } from 'kobra';

export const Redirect = ({ to }) => {
  route(to);
  return null;
};
