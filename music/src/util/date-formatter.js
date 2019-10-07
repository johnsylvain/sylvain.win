class DateFormatter {
  format(date, format = dateFormats.FULL) {
    const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: format });

    return formatter.format(new Date(date.replace(/-/g, '/')));
  }

  formatDuration(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time / 60000 - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

export const dateFormats = {
  LONG: 'long',
  FULL: 'full',
  MEDIUM: 'medium',
  SHORT: 'short'
};

export const dateFormatter = new DateFormatter();
