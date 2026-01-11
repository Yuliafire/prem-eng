export const dateString = (date: Date = new Date()): string => {
  const formatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  return date.toLocaleDateString('en-US', formatOptions);
};

export function formatBreadcrumbName(name: string): string {
  return decodeURIComponent(name);
}

export function formatDate(dateStringInput: string, isShort = false): string {
  try {
    const date = new Date(dateStringInput);

    if (isNaN(date.getTime())) {
      return dateStringInput;
    }

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: isShort ? 'short' : 'long',
      day: 'numeric',
    }).format(date);
  } catch {
    return dateStringInput;
  }
}
