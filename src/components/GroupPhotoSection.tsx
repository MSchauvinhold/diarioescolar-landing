import { GroupPhoto } from '../data/personal';

interface GroupPhotoSectionProps {
  data: GroupPhoto;
}

export default function GroupPhotoSection({ data }: GroupPhotoSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
      <div className="relative h-[500px]">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-contain bg-gray-50"
          loading="lazy"
        />
      </div>
    </div>
  );
}