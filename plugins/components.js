import Vue from 'vue'

/* Atoms */
import ALink from '~/components/atoms/ALink.vue'

/* Molecules */
import MLinkList from '~/components/molecules/MLinkList.vue'

/* Templates */
import Page from '~/components/templates/Page.vue'

import Teaser from '~/components/Teaser.vue'
import Grid from '~/components/Grid.vue'
import Feature from '~/components/Feature.vue'

Vue.component('a-link', ALink)
Vue.component('m-link-list', MLinkList)
Vue.component('page', Page)

Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
