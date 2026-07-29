const _flowContact = window.FLOW_CONTACT || {};

window.FLOW_DISCOVERY = {
  KEY: 'flowDiscovery',
  WA_NUMBER: _flowContact.WA_NUMBER || '',
  CONTACT_PHONE: _flowContact.CONTACT_PHONE || '',
  CONTACT_PHONE_TEL: _flowContact.CONTACT_PHONE_TEL || '',
  CONTACT_EMAIL: _flowContact.CONTACT_EMAIL || '',

  labels: {
    projectType: {
      web: 'Web sitesi / Landing',
      app: 'Web / Mobil Uygulama',
      brand: 'Marka & Kimlik',
      other: 'Diğer',
    },
    budget: {
      '50k-alti': '50.000 ₺ altı',
      '50k-150k': '50.000 – 150.000 ₺',
      '150k-500k': '150.000 – 500.000 ₺',
      '500k-ustu': '500.000 ₺ üzeri',
    },
    timeline: {
      acil: 'Acil (1 ay içinde)',
      '1-3-ay': '1 – 3 ay',
      '3-6-ay': '3 – 6 ay',
      esnek: 'Esnek / henüz belirsiz',
    },
  },

  isValid(data) {
    return !!(data && data.projectType && data.budget && data.timeline);
  },

  save(data) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch (_) {}
  },

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      return this.isValid(data) ? data : null;
    } catch (_) {
      return null;
    }
  },

  clear() {
    try {
      localStorage.removeItem(this.KEY);
    } catch (_) {}
  },

  fromSearchParams(params) {
    const data = {
      projectType: params.get('projectType') || '',
      budget: params.get('budget') || '',
      timeline: params.get('timeline') || '',
    };
    return this.isValid(data) ? data : null;
  },

  toQueryString(data) {
    const params = new URLSearchParams({
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
    });
    return params.toString();
  },

  labelSummary(data) {
    const L = this.labels;
    return [
      L.projectType[data.projectType] || data.projectType,
      L.budget[data.budget] || data.budget,
      L.timeline[data.timeline] || data.timeline,
    ].join(' · ');
  },

  waUrl(message) {
    return (
      'https://wa.me/' +
      this.WA_NUMBER +
      '?text=' +
      encodeURIComponent(message || 'Merhaba, web sitenizden ulaşıyorum.')
    );
  },
};
