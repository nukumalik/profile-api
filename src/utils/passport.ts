import passport from 'passport'
import {ExtractJwt, Strategy} from 'passport-jwt'

export const jwtStrategy = () =>
  passport.use(
    new Strategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'this is very strong secret, lol!',
      },
      (payload, done) => {
        if (payload) return done(null, payload)

        return done(null, false)
      }
    )
  )

export const isAuth = passport.authenticate('jwt', {session: false})
