class DateFormatter {
  format(date, format = dateFormats.FULL) {
    const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: format })

    return formatter.format(new Date(date.replace(/-/g, '/')));
  }
}

export const dateFormats = {
  LONG: 'long',
  FULL: 'full',
  MEDIUM: 'medium',
  SHORT: 'short',
}

export const dateFormatter = new DateFormatter();