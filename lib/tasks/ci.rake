# continuous integration build task
task :ci do
  tasks = []
  tasks << :spec
  tasks << 'spec:javascript'
  tasks.each do |task|
    Rake::Task[task].invoke
  end
end
