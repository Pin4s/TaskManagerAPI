import { prisma } from '@/database/prisma';

async function seedTeamsAndTasks() {
  const teams = await prisma.teams.createMany({
    data: [
      { name: 'Time de Desenvolvimento', description: 'Responsável pelo desenvolvimento de software' },
      { name: 'Time de Design', description: 'Responsável pelo design de produtos' },
      { name: 'Time de Negociação', description: 'Responsável pelas negociações e vendas' },
    ]
  });

  const allUsers = await prisma.users.findMany();
  const allTeams = await prisma.teams.findMany();

  // Distribuir usuários aleatoriamente
  const shuffledUsers = allUsers.sort(() => 0.5 - Math.random());

  const teamMembers = allTeams.map((team, index) => {
    const start = index * 5;
    const end = start + 5;
    const members = shuffledUsers.slice(start, end);

    return members.map(user => ({
      userId: user.id,
      teamId: team.id
    }));
  }).flat();

  // Criar TeamMembers
  await prisma.teamMembers.createMany({
    data: teamMembers
  });

  // Criar Tasks
  const status = ['pending', 'inProgress', 'completed'] as const;
  const priority = ['high', 'medium', 'low'] as const;

  for (const team of allTeams) {
    const members = teamMembers.filter(tm => tm.teamId === team.id);

    for (let i = 0; i < 5; i++) {
      const randomMember = members[Math.floor(Math.random() * members.length)];

      await prisma.tasks.create({
        data: {
          title: `Task ${i + 1} - ${team.name}`,
          description: `Descrição da Task ${i + 1} do ${team.name}`,
          status: status[Math.floor(Math.random() * status.length)],
          priority: priority[Math.floor(Math.random() * priority.length)],
          assignedTo: randomMember.userId,
          teamId: team.id
        }
      });
    }
  }

  console.log('Teams, TeamMembers e Tasks seedados com sucesso!');
  await prisma.$disconnect();
}

seedTeamsAndTasks();
