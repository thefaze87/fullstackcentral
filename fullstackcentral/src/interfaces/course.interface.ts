export interface Course {
    id: string;
    title: string;
    description: string;
    shortDescription?: string;
    price: {
        regular: number;
        sale?: number;
        currency: string;
    };
    imageUrl: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    duration: {
        hours: number;
        format: string;
    };
    topics: string[];
    prerequisites?: string[];
    instructor: {
        name: string;
        bio: string;
        avatarUrl: string;
    };
    features: string[];
    status: 'draft' | 'published' | 'archived';
    slug: string;
    metadata: {
        createdAt: Date;
        updatedAt: Date;
        publishedAt?: Date;
    };
}