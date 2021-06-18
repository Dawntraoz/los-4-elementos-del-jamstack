import Vue from 'vue'

/* Atoms */
import ALink from '~/components/atoms/ALink.vue'

/* Molecules */
import MLinkList from '~/components/molecules/MLinkList.vue'
import MFeature from '~/components/molecules/MFeature.vue'
import MTeaser from '~/components/molecules/MTeaser.vue'

/* Organisms */
import OGrid from '~/components/organisms/OGrid.vue'

/* Templates */
import Page from '~/components/templates/Page.vue'

Vue.component('a-link', ALink)
Vue.component('m-link-list', MLinkList)
Vue.component('m-feature', MFeature)
Vue.component('m-teaser', MTeaser)
Vue.component('o-grid', OGrid)
Vue.component('page', Page)
