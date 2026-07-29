window.FLOW_FORMSPREE = {
  ENDPOINT: 'https://formspree.io/f/mvzelqrl',
  SITE_URL: 'https://flow-production-bcd2.up.railway.app',

  async submit(data) {
    const response = await fetch(this.ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.error || 'Gönderim başarısız');
    }

    return result;
  },
};
