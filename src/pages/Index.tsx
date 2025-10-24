export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-7xl">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/27f80a64-488b-418a-8bfd-d0feabf3e9ac/files/4b04662f-9455-44e3-9c3c-1cb17df7005f.jpg)'
          }}
        />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-12 py-20">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-montserrat font-black text-7xl md:text-9xl lg:text-[12rem] text-foreground leading-none tracking-tighter">
              ЯН
            </h1>
            <div className="h-1 w-32 bg-primary mx-auto animate-slide-in" />
          </div>
          
          <p className="font-roboto font-light text-muted-foreground text-lg md:text-xl max-w-md animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            Эксклюзивная коллекция
          </p>
        </div>
      </div>
    </div>
  );
}
