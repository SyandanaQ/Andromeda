import { useSession } from "next-auth/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const data = [
    { name: 'Jan', value: 8865515703.45 },
    { name: 'Feb', value: 8034800740.55 },
    { name: 'Mar', value: 6960808302.87 },
    { name: 'Apr', value: 6903189654.04 },
    { name: 'May', value: 6241005210.67 },
    { name: 'Jun', value: 5505783087.58 },
    { name: 'Jul', value: 6322008250.24 },
    { name: 'Aug', value: 7235526896.45 },
    { name: 'Sep', value: 7342941152.45 },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <ResponsiveContainer width="80%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#ff7300" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
