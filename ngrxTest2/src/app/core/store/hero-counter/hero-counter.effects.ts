import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class HeroCounterEffects {
  constructor(actions$: Actions) {
  }

  // Implement effects with @Effect()
  // Just an example
  // @Effect()
  // loginRequestEffect$: Observable<Action> = this.actions$.pipe(
  //   ofType<featureActions.LoginRequestAction>(
  //     featureActions.ActionTypes.LOGIN_REQUEST
  //   ),
  //   switchMap(action =>
  //     this.dataService
  //         .login(action.payload.userName, action.payload.password)
  //         .pipe(
  //           map(
  //             user =>
  //               new featureActions.LoginSuccessAction({
  //                 user
  //               })
  //           ),
  //           catchError(error =>
  //             observableOf(new featureActions.LoginFailureAction({ error }))
  //           )
  //         )
  //   )
  // );
}
