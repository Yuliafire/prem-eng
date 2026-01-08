'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  title: string;
  showCloseButton: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  title,
  showCloseButton = true,
  onClose,
  children,
}: ModalProps) {
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    modalRef.current.focus();
    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);
  if (!mounted || !isOpen || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-md w-full relative text-gray-900 dark:text-gray-100"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {title && (
          <h2
            id="modal-title"
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
          >
            {title}
          </h2>
        )}
        {showCloseButton && (
          <button
            className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
            data-testid="modal-close-button"
          >
            ×
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
}
