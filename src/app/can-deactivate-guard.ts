import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate{
  caDeactivate: ()=> boolean
}

export const canDeactivateGuard: CanDeactivateFn <CanComponentDeactivate> = (component) => {
  return component.caDeactivate();
};
