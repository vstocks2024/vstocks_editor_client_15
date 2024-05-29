'use client';

import { useTemplate } from '@/app/context/template';
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation';

const DynamicEditor = dynamic(() => import('../../../components/Editor').then(a => a.EditorWithStore), {
  ssr: false,
})


function EditorPage() {
  const pathname=usePathname();
  const arr=pathname.split("/");
  const template=useTemplate();
  template.setTemplateId(arr[2]);
  
  return (
    <DynamicEditor />
  );
}

EditorPage.diplsayName = "EditorPage";

export default EditorPage;