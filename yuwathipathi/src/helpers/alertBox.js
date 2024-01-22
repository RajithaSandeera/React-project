// ActionAlerts.js
import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';

const ActionAlerts = () => {
  const { alerts } = useSelector((state) => state.notifications);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  }, [alerts]);

  const onClose = () => {
    setShow(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 10, // Adjust the top position as needed
        right: 10, // Adjust the right position as needed
        zIndex: 9999, // Ensure it appears above other content
      }}
    >
      {show && (
        <Stack sx={{ width: '100%' }} spacing={6}>
          <Alert severity={alert.type} onClose={onClose}>
            {alert.message}
          </Alert>
        </Stack>
      )}
    </div>
  );
};

export default ActionAlerts;
