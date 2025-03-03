import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Home } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React from "react";

export default function NewYearPage() {
  return (
    <div className="flex flex-col h-screen bg-red-50 p-6">
      {/* Header */}
      <header className="bg-red-600 text-white p-4 text-center">
        <h1 className="text-4xl font-bold">新春快乐！</h1>
        <p className="mt-2 text-lg">祝大家春节快乐，阖家幸福！</p>
      </header>
      {/* Main content */}
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Personal Greeting */}
          <Card className="shadow-lg bg-white">
            <CardHeader>
              <CardTitle>春节祝福</CardTitle>
              <CardDescription>送上新春的祝福</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-xl text-gray-700">愿你在新的一年里，健康平安，事事顺利！</p>
            </CardContent>
          </Card>

          {/* Avatar */}
          <Card className="shadow-lg bg-white">
            <CardHeader>
              <CardTitle>我的头像</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Avatar>
                <AvatarImage src="https://example.com/my-avatar.png" />
                <AvatarFallback>XX</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          {/* Progress Bar */}
          <Card className="shadow-lg bg-white">
            <CardHeader>
              <CardTitle>新年目标</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">今年我有以下目标：</p>
              <div value={60} className="mt-2" />
              <p className="text-center text-sm text-gray-600 mt-2">目标达成度：60%</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-6" />

        {/* Scrollable Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl text-center font-semibold">春节趣事</h2>
          <ScrollArea className="h-40 mt-4 rounded-lg border p-4 bg-gray-50">
            <p>今年春节，我和家人一起包饺子，玩麻将，互送红包，吃年夜饭，度过了一个温馨的节日...</p>
          </ScrollArea>
        </div>

        <Separator className="my-6" />

        {/* Badge with Tooltip */}
        <div className="flex justify-center items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge variant="outline" className="text-xl p-2">红包</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>祝您红包满满，财运亨通！</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-red-600 text-white p-4 text-center">
        <p>© 2025 祝你新的一年里一切顺利，工作顺利，身体健康！</p>
        <Button variant="outline" className="mt-4">
          发送新年祝福
        </Button>
      </footer>
    </div>
  );
}