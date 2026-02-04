import { GroupPhoto } from '../data/personal';

interface GroupPhotoSectionProps {
  data: GroupPhoto;
  showMembers?: boolean;
}

export default function GroupPhotoSection({ data, showMembers = true }: GroupPhotoSectionProps) {
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
      
      {showMembers && data.members.length > 0 && (
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Integrantes</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {data.members.map((member, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{member}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}