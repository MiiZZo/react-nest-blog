import React from "react";

type Role = "default" | "moderator" | "admin";
type Component<P> = (props: P & { isAuth: boolean }) => JSX.Element;

export function withAuth<P>(
  Component: Component<P>,
  role: Role,
): React.FC<P & { isAuth: boolean }> {
  const isAuth = true;
  return function ComponentWithAuth(props: P & { isAuth: boolean }) {
    return <Component {...props} isAuth={isAuth} />;
  };
}
