// import Chatbot from '@/components/layout/chatbot/Chatbot';
//
// export default async function Chat() {
// return <Chatbot />;
// }
//

// app/chat/page.tsx
import Chatbot from '@/components/layout/chatbot/Chatbot';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Chat() {
  const cookieStore = cookies();

  const authToken = (await cookieStore).get('authToken')?.value;

  if (!authToken) {
    redirect('/login?redirect=/chat');
  }

  return <Chatbot />;
}
