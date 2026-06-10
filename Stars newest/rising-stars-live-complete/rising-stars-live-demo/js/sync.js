/**
 * Real-time Data Sync Engine
 * Syncs data between Admin and Viewer pages using localStorage
 */

class DataSync {
  constructor() {
    this.storageKey = 'rising-stars-data';
    this.subscribers = new Set();
    this.initListeners();
  }

  initListeners() {
    window.addEventListener('storage', (e) => {
      if (e.key === this.storageKey) {
        this.notifySubscribers();
      }
    });

    document.addEventListener('dataUpdated', () => {
      this.notifySubscribers();
    });
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  notifySubscribers() {
    this.subscribers.forEach(callback => callback(this.getData()));
  }

  getData() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : this.getDefaultData();
  }

  setData(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    document.dispatchEvent(new CustomEvent('dataUpdated', { detail: data }));
  }

  updateData(updater) {
    const current = this.getData();
    const updated = updater(current);
    this.setData(updated);
    return updated;
  }

  getDefaultData() {
    return { tournaments: [], currentMatch: null, timer: null };
  }

  createTournament(tournament) {
    return this.updateData(data => ({
      ...data,
      tournaments: [...data.tournaments, {
        ...tournament,
        id: `t_${Date.now()}`,
        teams: [],
        matches: [],
        createdAt: new Date().toISOString()
      }]
    }));
  }

  updateTournament(id, updates) {
    return this.updateData(data => ({
      ...data,
      tournaments: data.tournaments.map(t => t.id === id ? { ...t, ...updates } : t)
    }));
  }

  addMatch(tournamentId, match) {
    return this.updateData(data => ({
      ...data,
      tournaments: data.tournaments.map(t => t.id === tournamentId ? {
        ...t,
        matches: [...(t.matches || []), { ...match, id: `m_${Date.now()}` }]
      } : t)
    }));
  }

  updateMatch(tournamentId, matchId, updates) {
    return this.updateData(data => ({
      ...data,
      tournaments: data.tournaments.map(t => t.id === tournamentId ? {
        ...t,
        matches: (t.matches || []).map(m => m.id === matchId ? { ...m, ...updates } : m)
      } : t)
    }));
  }

  setTimer(timerData) {
    return this.updateData(data => ({ ...data, timer: timerData }));
  }

  updateTimer(updates) {
    return this.updateData(data => ({
      ...data,
      timer: data.timer ? { ...data.timer, ...updates } : null
    }));
  }
}

window.dataSync = new DataSync();
