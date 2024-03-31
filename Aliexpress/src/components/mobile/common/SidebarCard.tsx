interface props {
  url: string;
  title: string;
}

const SidebarCard = ({ url, title }: props) => {
  return (
    <div className="flex items-center gap-4">
      <img src={url} alt="product" className="w-12 rounded-md" />
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default SidebarCard;
