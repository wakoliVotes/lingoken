<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: './assets/lingoround1.png',
    name: 'Votez',
    title: 'Founder | Developer',
    links: [
      { icon: 'github', link: 'https://github.com/wakoliVotes' },
      { icon: 'twitter', link: 'https://twitter.com/voteswakoli' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />