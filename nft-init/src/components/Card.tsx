import Avatar from './Avatar';
import TextContent from './TextContent';

export default function Card() {
  return (
    <div className="w-full max-w-[464px] h-auto rounded-[24px] bg-background-primary border border-border-primary overflow-hidden mx-auto">
      <Avatar />
      <TextContent />
    </div>
  );
} 