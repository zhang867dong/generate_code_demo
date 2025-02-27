import { Separator } from '@/components/ui/separator';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
const NewYearPage = () => {
  return (
    <div className="flex flex-col h-screen bg-red-50">
      {/* Header */}
      <header className="bg-red-600 p-6 text-white text-center shadow-lg">
        <h1 className="text-4xl font-bold">春节快乐!</h1>
        <p className="mt-2 text-lg">祝您和家人新的一个年健康、幸福、如意！</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <section>
          <h2 className="text-3xl font-semibold mb-4">春节的意义</h2>
          <p className="text-lg">
            春节是中国最重要的传统节日，象征着辞旧迎新的一年开始。家人团聚，祈求新的一年平安、顺利、幸福。
          </p>
        </section>

        <Separator className="my-6" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">春节活动</h2>
          <ul className="space-y-4 text-lg">
            <li>1. 年夜饭：家人团聚一起，分享美味时光。</li>
            <li>2. 放烟花：象征着辞旧迎新，迎接新的希望。</li>
            <li>3. 红包：长辈给晚辈派发红包，祝愿好运连连。</li>
          </ul>
        </section>

        <Separator className="my-6" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">春节瞬间</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <img
                src="https://images.unsplash.com/photo-1547547039-8f8bcfe0e3a5?w=500&fit=crop"
                alt="春节烟花"
                className="rounded-md shadow-md"
              />
              <p className="text-center mt-2">春节烟花</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1603052874410-d500f0005e2b?w=500&fit=crop"
                alt="春节红包"
                className="rounded-md shadow-md"
              />
              <p className="text-center mt-2">春节红包</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1584703471520-0c98b6c9b100?w=500&fit=crop"
                alt="家庭团聚"
                className="rounded-md shadow-md"
              />
              <p className="text-center mt-2">家庭团聚</p>
            </div>
          </div>
        </section>

        <Separator className="my-6" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">春节祝福</h2>
          <TooltipProvider>
            <div className="flex items-center space-x-4">
              <Tooltip>
                <TooltipTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/Yuyz0112.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>祝您在新的一年里身体健康，工作顺利！</p>
                </TooltipContent>
              </Tooltip>
              <div>
                <Button variant="outline">发送祝福</Button>
              </div>
            </div>
          </TooltipProvider>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 p-4 text-white text-center">
        <p>© 2025 春节网页 - 祝您好运常伴！</p>
      </footer>
    </div>
  );
};

export default NewYearPage;