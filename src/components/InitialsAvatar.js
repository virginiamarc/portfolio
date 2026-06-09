const InitialsAvatar = ({ initials }) => {
  return (
    <div className="w-24 h-24 rounded-full bg-[#1e2024] border border-[#FF7ACD] flex items-center justify-center shadow-shadowOne">
      <span className="text-gray-200 text-2xl font-semibold">
        {initials}
      </span>
    </div>
  );
};

export default InitialsAvatar;
