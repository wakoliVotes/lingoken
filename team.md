<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/lingoround1.png',
    name: 'Votez',
    title: 'Founder | Developer',
    org: 'AnchorMiles',
    sponsor: 'true',
    actionText: 'Buy Me a Coffee',
    desc: 'I am a passionate developer who loves to create innovative solutions.',
    links: [
      { icon: 'github', link: 'https://github.com/wakoliVotes' },
      { icon: 'twitter', link: 'https://x.com/WakoliVotes' }
    ]
  },
    {
    avatar: '/lingoround1.png',
    name: 'Votez',
    title: 'Founder | Developer',
    org: 'AnchorMiles',
    sponsor: 'true',
    actionText: 'Buy Me a Coffee',
    desc: 'I am a passionate developer who loves to create innovative solutions.',
    links: [
      { icon: 'github', link: 'https://github.com/wakoliVotes' },
      { icon: 'twitter', link: 'https://x.com/WakoliVotes' }
    ]
  },
    {
    avatar: '/lingoround1.png',
    name: 'Votez W',
    title: 'Founder | Developer',
    org: 'AnchorMiles',
    sponsor: 'https://buymeacoffee.com/founderske',
    actionText: 'Buy Me a Coffee',
    desc: 'I am a passionate developer who loves to create innovative solutions.',
    links: [
      { icon: 'github', link: 'https://github.com/wakoliVotes' },
      { icon: 'twitter', link: 'https://x.com/WakoliVotes' }
    ]
  },
    {
    avatar: '/lingoround1.png',
    name: 'Votez',
    title: 'Founder | Developer',
    org: 'AnchorMiles',
    sponsor: 'true',
    actionText: 'Buy Me a Coffee',
    desc: 'I am a passionate developer who loves to create innovative solutions.',
    links: [
      { icon: 'github', link: 'https://github.com/wakoliVotes' },
      { icon: 'twitter', link: 'https://x.com/WakoliVotes' }
    ]
  },
    {
    avatar: '/lingoround1.png',
    name: 'Votez',
    org: 'AnchorMiles',
    sponsor: 'true',
    actionText: 'Buy Me a Coffee',
    desc: 'I am a passionate developer who loves to create innovative solutions.',
    title: 'Founder | Developer',
    links: [
      { icon: 'github', link: 'https://github.com/wakoliVotes' },
      { icon: 'twitter', link: 'https://x.com/WakoliVotes' }
    ]
  },
    {
    avatar: '/lingoround1.png',
    name: 'Votez',
    title: 'Founder | Developer',
    org: 'AnchorMiles',
    sponsor: 'true',
    actionText: 'Buy Me a Coffee',
    desc: 'I am a passionate developer who loves to create innovative solutions.',
    links: [
      { icon: 'github', link: 'https://github.com/wakoliVotes' },
      { icon: 'twitter', link: 'https://x.com/WakoliVotes' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />