export default async function({ route, store }) {
  await store.dispatch('blocks/fetchBlocks');
  await store.dispatch('stories/fetchStories');
  await store.dispatch('stats/fetchStats');
  await store.dispatch('slider/fetchSlides');
}
