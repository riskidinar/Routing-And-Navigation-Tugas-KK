//src/app/courses/[cousrseId]/materials/[materialId]/page.tsx
type Props = {
    params: {
        courseId: string
        materialId: string
    }
}

export default function TeacherProfilePage({params}: Props) {
    const { courseId, materialId } = params;
    return (
        <h1>Melihat materi {params.courseId} untuk mata pelajaran {params.materialId}</h1>
    );
}
