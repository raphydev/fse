<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181116115122 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE actionnaire DROP FOREIGN KEY FK_2FA91B4E1224ABE0');
        $this->addSql('DROP TABLE actionnaire');
        $this->addSql('DROP TABLE compagny');
        $this->addSql('ALTER TABLE rapport DROP content, DROP doc_link, CHANGE image_size file_size INT NOT NULL, CHANGE image_name file_name VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE actionnaire (id INT AUTO_INCREMENT NOT NULL, compagny_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, part VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, INDEX IDX_2FA91B4E1224ABE0 (compagny_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE compagny (id INT AUTO_INCREMENT NOT NULL, domain_id INT DEFAULT NULL, legal_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, seat VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, city VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, website VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, slug VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, INDEX IDX_17A57A04115F0EE5 (domain_id), INDEX IDX_17A57A0462BB3C59 (legal_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE actionnaire ADD CONSTRAINT FK_2FA91B4E1224ABE0 FOREIGN KEY (compagny_id) REFERENCES compagny (id)');
        $this->addSql('ALTER TABLE compagny ADD CONSTRAINT FK_17A57A04115F0EE5 FOREIGN KEY (domain_id) REFERENCES domain (id)');
        $this->addSql('ALTER TABLE compagny ADD CONSTRAINT FK_17A57A0462BB3C59 FOREIGN KEY (legal_id) REFERENCES legal (id)');
        $this->addSql('ALTER TABLE rapport ADD content LONGTEXT NOT NULL COLLATE utf8_unicode_ci, ADD doc_link VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, CHANGE file_size image_size INT NOT NULL, CHANGE file_name image_name VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci');
    }
}
