export default {
  data: () => ({ 
    refreshInterval: null, 
  }),
  created() {
    Nova.$on('metric-refresh', this.fetch)

    Nova.$on('resources-deleted', this.fetch)
    Nova.$on('resources-restored', this.fetch)

    if (this.card.refreshWhenActionRuns) {
      Nova.$on('action-executed', this.fetch)
    }

    if (this.card.refreshAtInterval) {
      this.refreshInterval = setInterval(this.fetch, this.card.refreshAtInterval)
    }
  },

  beforeUnmount() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval)
    }
    Nova.$off('metric-refresh', this.fetch)
    Nova.$off('resources-deleted', this.fetch)
    Nova.$off('resources-restored', this.fetch)
    Nova.$off('action-executed', this.fetch)
  },
}
