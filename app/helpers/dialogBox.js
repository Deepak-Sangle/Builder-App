import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const ErrorDialog = (props) => {
    
    const visible = props.visible;
    const setVisible = props.setVisible;
    const err = props.err;
    const heading = props.heading;

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    return (
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>{heading}</Dialog.Title>
              <Dialog.Content>
                <Paragraph>{err}</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Ok</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
    );
};

export default ErrorDialog;
