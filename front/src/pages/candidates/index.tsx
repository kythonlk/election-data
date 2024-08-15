import PageHead from '@/components/shared/page-head';
import CandidateTable from './components/table';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export default function StudentPage() {

  return (
    <div className="p-4 md:p-8">
      <PageHead title="Election 2024 | App" />
      <Breadcrumbs
        items={[
          { title: 'Dashboard', link: '/' },
          { title: 'Candidates', link: '/candidates' }
        ]}
      />
      <CandidateTable />
    </div>
  );
}
