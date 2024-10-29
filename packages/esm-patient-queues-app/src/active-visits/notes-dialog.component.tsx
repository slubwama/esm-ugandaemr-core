import React from 'react';
import { MappedQueueEntry } from '../types';
import { Button, Form, ModalBody, ModalFooter, ModalHeader } from '@carbon/react';
import { useTranslation } from 'react-i18next';
import styles from './change-status-dialog.scss';
import { MappedPatientQueueEntry } from './patient-queues.resource';

interface NotesDialogProps {
  queueEntry: MappedPatientQueueEntry;
  closeModal: () => void;
}

const NotesDialog: React.FC<NotesDialogProps> = ({ queueEntry, closeModal }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Form>
        <ModalHeader closeModal={closeModal}>
          <section className={styles.section}>
            <p>Clinical Notes</p>
          </section>
        </ModalHeader>
        <ModalBody>
          <div className={styles.modalBody}>
            <section className={styles.section}>
              <p>{queueEntry.comment}</p>
            </section>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button kind="secondary" onClick={closeModal}>
            {t('cancel', 'Cancel')}
          </Button>
        </ModalFooter>
      </Form>
    </div>
  );
};

export default NotesDialog;
