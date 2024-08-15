import PageHead from '@/components/shared/page-head.jsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
} from '@/components/ui/tabs.js';
import Icon from '@/components/shared/icon';
import Overview from './components/overview';

const electionData = [
  {
    title: "Candidate A",
    votes: "5,231,000",
    percentage: "45%",
    description: "+2% since last update",
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  },
  {
    title: "Candidate B",
    votes: "4,500,500",
    percentage: "38%",
    description: "+1.5% since last update",
    icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  },
  {
    title: "Candidate C",
    votes: "1,200,000",
    percentage: "10%",
    description: "+0.3% since last update",
    icon: "M2 10h20"
  },
  {
    title: "Others",
    votes: "500,000",
    percentage: "7%",
    description: "+0.1% since last update",
    icon: "M22 12h-4l-3 9L9 3l-3 9H2"
  }
];

export default function DashboardPage() {
  return (
    <>
      <PageHead title="Dashboard | Election 2024" />
      <div className="max-h-screen flex-1 space-y-4 overflow-y-auto p-4 pt-6 md:p-8">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {electionData.map((candidate, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {candidate.title}
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d={candidate.icon} />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold flex justify-between">{candidate.votes} <span className="text-base text-muted-foreground text-right">{candidate.percentage}</span></div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8">
              <Card className="col-span-4 md:col-span-4 flex justify-center py-4">
                <Icon />
              </Card>
              <Card className="col-span-4">
              <CardHeader>
                  <CardTitle>Recent Results</CardTitle>
                  <CardDescription>
                   Least recent results from <span className='font-bold text-gray-100'>Kaduwela</span> 
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex items-end pt-20'>
                  <Overview />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
