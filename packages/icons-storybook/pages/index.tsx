import React from 'react';
import Content from '../src/Content';
import { DashboardLayout } from '@bigration-libs/ui-elements';

export function Index() {
  return (
    <div>
      <DashboardLayout>
        <Content />
      </DashboardLayout>
    </div>
  );
}

export default Index;
