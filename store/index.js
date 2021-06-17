export const state = () => ({
  layout: null
})

export const actions = {
  async updateLayout({ commit }) {
    const { data } = await this.$storyapi.get(`cdn/stories/layout`, {
      version: this.app.context.query._storyblok || this.app.context.isDev ? 'draft' : 'published'
    });
    commit('UPDATE_LAYOUT', data.story)
  }
}

export const mutations = {
  UPDATE_LAYOUT(state, layoutData) {
    state.layout = layoutData
  }
}