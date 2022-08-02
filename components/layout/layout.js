import React, { Fragment, useContext } from "react";
import MainHeader from "./main-header";
import Notification from "../ui/notification";
import NotificationContext from "../../store/notification-context";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  console.log("motificationctx in layout", notificationCtx);

  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={notificationCtx.notification.title}
          message={notificationCtx.notification.message}
          status={notificationCtx.notification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
