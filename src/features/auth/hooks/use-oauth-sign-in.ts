import { useActionState } from "react"
import { oauthSignInAction } from "../actions/oauth-sign-in-action"

export const useOauthSignIn = () => {
  const [, action, isPending] = useActionState(oauthSignInAction, null)

  return {
    action,
    isPending,
  }
}