function BlogCard() {
  return (
    <div
      className="
        border border-slate-900/10 shadow-sm rounded-2xl
        w-full max-w-sm lg:max-w-lg
        px-4 py-3
        flex flex-col gap-2
        text-sm
      "
    >
      <h3 className="font-semibold text-base">
        Sample Blog
      </h3>

      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        consequuntur officia, nobis, doloremque dolore magni quos non
        exercitationem id accusantium sint, aliquid vero quisquam voluptas.
        Amet modi in quas nisi!
      </p>
    </div>
  );
}

export default BlogCard;
