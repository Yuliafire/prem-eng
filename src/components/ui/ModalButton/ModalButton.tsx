'use client';

import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import Modal from '@/components/ui/modal/Modal';
import Form from '@/components/layout/formLesson/Form';
import type { FormData } from '@/lib/schema';
import { Button } from '@/components/ui/button';

interface ModalButtonProps {
  readonly children: React.ReactNode;
  readonly variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  readonly size?: 'default' | 'sm' | 'lg' | 'icon';
  readonly className?: string;
  // modalTitle?: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mleykrkd';

export default function ModalButton({
  children,
  variant = 'default',
  size = 'lg',
  className = '',
  // modalTitle = 'Начните сейчас',
}: ModalButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('acceptedTC', data.acceptedTC.toString());
      formData.append('formType', 'contact-form');
      formData.append('_subject', 'New Contact Form Submission');

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        toast.success('Спасибо! Ваше сообщение отправлено.');
        setIsModalOpen(false);
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        toast.error('Ошибка отправки. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button
        size={size}
        variant={variant}
        className={`whitespace-nowrap ${className}`}
        onClick={openModal}
        data-testid="start-now-button"
      >
        {children}
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        showCloseButton={true}
        title="Начните обучение прямо сейчас"
      >
        <Form onSubmit={handleFormSubmit} />
      </Modal>
    </>
  );
}
